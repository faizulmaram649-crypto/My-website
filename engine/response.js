const response = {
    responses: {},
    loaded: false,

    async load() {

        const files = [
            "greetings",
            "common_chat",
            "education",
            "math",
            "science",
            "english",
            "hindi",
            "urdu",
            "sst",
            "geography",
            "history",
            "gk",
            "technology",
            "coding",
            "internet",
            "mobile",
            "cricket",
            "football",
            "sports",
            "islamic",
            "quran",
            "hadith",
            "health",
            "fitness",
            "food",
            "recipes",
            "motivation",
            "careers",
            "business",
            "travel",
            "animals",
            "plants",
            "space",
            "environment",
            "movies",
            "books",
            "jokes",
            "festivals",
            "daily_life"
        ];

        this.responses = {};

        for (const file of files) {

            try {

                const res = await fetch(`data/${file}.json`);

                if (!res.ok) {
                    console.warn(`${file}.json not found`);
                    continue;
                }

                const data = await res.json();

                Object.assign(
                    this.responses,
                    data
                );

            } catch (err) {

                console.error(
                    `Error loading ${file}.json`,
                    err
                );

            }
        }

        this.loaded = true;

        console.log(
            "Knowledge Loaded:",
            Object.keys(this.responses).length
        );
    },

    get(keyword) {
        return this.responses[keyword] || null;
    }
};
