interface Contact extends Address
{
    id: number;
    name: string;
    birthDate?: Date;
}

interface Address
{
    country?: string;
    city?: string;
    zipcode?: number;
}

let primaryContact: Contact = {
    id: 1,
    name: 'Gustavo'
};