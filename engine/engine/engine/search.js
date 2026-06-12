// Search Module
const search = {

    find(query) {

        query = query
            .toLowerCase()
            .trim();

        if (
            !query ||
            !response.loaded
        ) {
            return null;
        }

        // Exact Match
        if (
            response.responses[query]
        ) {

            return {
                type: "direct",
                keyword: query,
                data:
                    response.responses[
                        query
                    ]
            };

        }

        let bestMatch = null;
        let bestScore = 0;

        const queryWords =
            query.split(/\s+/);

        for (
            let key in
            response.responses
        ) {

            const lowerKey =
                key.toLowerCase();

            let score = 0;

            // Exact
            if (
                lowerKey === query
            ) {
                score += 1000;
            }

            // Contains
            if (
                lowerKey.includes(
                    query
                )
            ) {
                score += 500;
            }

            if (
                query.includes(
                    lowerKey
                )
            ) {
                score += 400;
            }

            const keyWords =
                lowerKey.split(
                    /\s+/
                );

            for (
                let qWord of queryWords
            ) {

                for (
                    let kWord of keyWords
                ) {

                    if (
                        qWord ===
                        kWord
                    ) {

                        score += 100;

                    } else if (
                        qWord.includes(
                            kWord
                        ) ||
                        kWord.includes(
                            qWord
                        )
                    ) {

                        score += 40;

                    }

                }

            }

            if (
                score >
                bestScore
            ) {

                bestScore =
                    score;

                bestMatch = {
                    type:
                        "best",
                    keyword:
                        key,
                    data:
                        response
                            .responses[
                            key
                        ],
                    score
                };

            }

        }

        if (
            bestMatch &&
            bestMatch.score >= 40
        ) {

            return bestMatch;

        }

        return null;

    },

    fuzzyFind(
        query,
        threshold = 2
    ) {

        query =
            query.toLowerCase();

        let results = [];

        for (
            let key in
            response.responses
        ) {

            const distance =
                this.levenshteinDistance(
                    query,
                    key.toLowerCase()
                );

            if (
                distance <=
                threshold
            ) {

                results.push({
                    keyword:
                        key,
                    data:
                        response
                            .responses[
                            key
                        ],
                    distance
                });

            }

        }

        results.sort(
            (a, b) =>
                a.distance -
                b.distance
        );

        return results;

    },

    levenshteinDistance(
        str1,
        str2
    ) {

        const matrix = [];

        for (
            let i = 0;
            i <= str1.length;
            i++
        ) {

            matrix[i] = [i];

        }

        for (
            let j = 0;
            j <= str2.length;
            j++
        ) {

            matrix[0][j] = j;

        }

        for (
            let i = 1;
            i <= str1.length;
            i++
        ) {

            for (
                let j = 1;
                j <= str2.length;
                j++
            ) {

                if (
                    str1[i - 1] ===
                    str2[j - 1]
                ) {

                    matrix[i][j] =
                        matrix[
                            i - 1
                        ][j - 1];

                } else {

                    matrix[i][j] =
                        Math.min(
                            matrix[
                                i - 1
                            ][
                                j - 1
                            ] + 1,
                            matrix[
                                i
                            ][
                                j - 1
                            ] + 1,
                            matrix[
                                i - 1
                            ][
                                j
                            ] + 1
                        );

                }

            }

        }

        return matrix[
            str1.length
        ][str2.length];

    },

    getSuggestions(
        query,
        limit = 5
    ) {

        query =
            query.toLowerCase();

        let results = [];

        for (
            let key in
            response.responses
        ) {

            if (
                key
                    .toLowerCase()
                    .includes(
                        query
                    )
            ) {

                results.push(key);

            }

        }

        return results.slice(
            0,
            limit
        );

    },

    getAllKeywords() {

        return Object.keys(
            response.responses
        );

    },

    getRandomTopic() {

        const keys =
            this.getAllKeywords();

        const random =
            keys[
                Math.floor(
                    Math.random() *
                        keys.length
                )
            ];

        return {
            keyword: random,
            response:
                response.responses[
                    random
                ]
        };

    }

};
