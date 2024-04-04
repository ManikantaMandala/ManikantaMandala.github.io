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
            "Developed a comprehensive Chit Fund Management System using Spring Boot, Java, and JPA.",
            "Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions.",
            " Implemented RESTful APIs, conducted code reviews, and contributed to troubleshooting and issue resolution, ensuring robustness and performance of the system."
        ],
        link: "https://github.com/YashitaKumar/Chit-Fund-Management-App"
    }
]

