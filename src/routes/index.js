import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { addViewToListRoute } from "./addViewToListing";
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { updatedListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";
export default [
    deleteListingRoute,
    updatedListingRoute,
    createNewListingRoute,
    getUserListingsRoute,
    getAllListingsRoute,
    getListingRoute,
    addViewToListRoute
]