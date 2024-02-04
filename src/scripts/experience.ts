export interface experienceType {
    companyName: string,
    companyLink: string,
    role: string,
    description: string[],
    link?: string
}

export const experience : experienceType[] = [
    {
        companyName: "Areksoft Technologies",
        companyLink: "https://www.areksoft.com/",
        role: "Android Developer",
        description: [
            "Developed a working android application has functionalities like user authentication, user data management, payment gateway.",
            "Collaborated with 3 membered teams to design and implement the application.",
            "Used different technologies like Java, XML, Gradle, Firebase, git."
        ],
        link: "https://github.com/YashitaKumar/Chit-Fund-Management-App"
    }
]

