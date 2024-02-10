export interface projectItemType {
    projectName: string;
    topics: string[];
    description: string[];
    link: string;
}

export const projects: projectItemType[] = [
    {
        projectName: "DocPlay",
        topics: ["Python", "LangChain", "GooglePalm", "FAISS", "Streamlit"],
        description: [
            "Assembled an AI chat-bot that trains on the text from the document user uploaded and answer any query user ask about that document.",
            "Created a web service which is hosted in our college servers."
        ],
        link: "https://github.com/ManikantaMandala/DocPlay"
    },
    {
        projectName: "ZipShort",
        topics: ["Spring boot", "React.js", "PostgreSQL DB"],
        description: [
            "Developed and implemented a URL shortening application that enhances link sharing efficiency. The application takes a long URL as input and generates a concise, easy-to-share short URL",
            "Constructed a web application with two services. One was written in React.JS and the other was written using Spring boot."
        ],
        link: "https://github.com/ManikantaMandala/learningJava/tree/day7"
    },
    {
        projectName: "TodoApplication",
        topics: ["Node.js", "React.js", "MongoDB"],
        description: [
            "Developed a minimalist Todo Application with user authentication for multiple users, Todo management",
            "Constructed a web application where frontend with React.js and the backend using Node.js. Where the implementation contains multiple libraries like, Zod, mongoose, dotenv, jsonwebtoken, Express.js, etc.."
        ],
        link: "https://github.com/ManikantaMandala/TodoApplication"
    }
];

