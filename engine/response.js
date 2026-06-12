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

                const flatData = flattenObject(data);

                Object.assign(this.responses, flatData);

            } catch (err) {

                console.error(`Error loading ${file}.json`, err);

            }

        }

        this.loaded = true;

        console.log(
            "Knowledge Loaded:",
            Object.keys(this.responses).length
        );
    },

    get(keyword) {
        return this.responses[keyword.toLowerCase()] || null;
    }
};

// FLATTEN NESTED JSON
function flattenObject(obj, result = {}) {

    for (const key in obj) {

        const value = obj[key];

        if (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)
        ) {

            flattenObject(value, result);

        } else {

            if (Array.isArray(value)) {

                result[key.toLowerCase()] =
                    value.map(v =>
                        typeof v === "object"
                            ? JSON.stringify(v)
                            : v
                    ).join("\n");

            } else if (typeof value === "object") {

                result[key.toLowerCase()] =
                    JSON.stringify(value, null, 2);

            } else {

                result[key.toLowerCase()] = value;

            }
        }
    }

    return result;
}
