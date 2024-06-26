export interface Student {
    id: number;
    name: string;
    major: string;
    gpa: string;
}

export const studentData: Student[] = [
    {
        id: 1,
        name: "Aekkarat",
        major: "Computer Science",
        gpa: "4.00"
    },
    {
        id: 2,
        name: "Natthapong",
        major: "Computer Science",
        gpa: "3.99"
    },
    {
        id: 3,
        name: "Kanyarat",
        major: "Computer Science",
        gpa: "2.99"
    }
];