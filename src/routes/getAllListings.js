import { db } from '../database';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: async (req, h) => {
        const result = await db.query('SELECT * FROM listings');
        return result;
    }
}