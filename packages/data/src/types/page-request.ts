export type PageRequestPayload = {
    ownerId: string;
    requestType: 'Learning Management System' | 'E-Commerce System' | 'Booking System' | 'Agency Management System';
    title: string;
    pageDescription: string;
    pageUrl: string;
    logo: File;
};