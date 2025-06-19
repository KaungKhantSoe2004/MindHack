import { configureStore } from "@reduxjs/toolkit";
import sponsorSlice from "./reducer/sponsorSlice";
import faqSlice from "./reducer/faqSlice";
export const store = configureStore({
  reducer: {
    faqs: faqSlice,
    sponsors: sponsorSlice,
  },
});
