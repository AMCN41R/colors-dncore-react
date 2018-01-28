import { IColor } from "./colors-api";

export namespace PeopleApi {
    
    export async function getPeople(): Promise<IPerson[]> {
        const response = await fetch("api/people");
        return await response.json();
    }

    export async function getPerson(id: number): Promise<IPerson> {
        const response = await fetch(`api/people/${id}`);
        return await response.json();
    }
}

export interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    isAuthorised: boolean;
    isValid: boolean;
    isEnabled: boolean;
    fullName: string;
    isPalindrome: boolean;
    colors: IColor[];
}