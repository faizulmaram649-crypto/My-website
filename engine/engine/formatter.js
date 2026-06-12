// Formatter Module
const formatter = {

    format(text) {

        if (
            text === null ||
            text === undefined
        ) {
            return "";
        }

        text = String(text);

        text = this.escapeHtml(text);

        text = text.replace(
            /\n/g,
            "<br>"
        );

        return text;

    },

    escapeHtml(text) {

        const map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;",
            "'": "&#039;"
        };

        return text.replace(
            /[&<>"']/g,
            m => map[m]
        );

    },

    formatInput(text) {

        if (!text) return "";

        return text
            .trim()
            .toLowerCase();

    },

    getTime() {

        const now =
            new Date();

        return now.toLocaleTimeString(
            "en-US",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    }

};
