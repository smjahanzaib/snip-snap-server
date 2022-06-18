import { Router } from 'express';

import authRouter from './auth';
import userRouter from './user';
import appointmentRouter from './appointment';
import categoryRouter from './category';
import cityRouter from './city';
import favoritesRouter from './favorites';
import inboxRouter from './inbox';
import locationRouter from './location';
import messageRouter from './message';
import ratingRouter from './rating';
import recentlyViewedRouter from './recently_viewed';
import searchAllRouter from './search_all';
import searchCategoryRouter from './search_category';
import searchHistoryRouter from './search_history';
import topLocationRouter from './top_location';
import voucherRouter from './voucher';

const router: Router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/appointment', appointmentRouter);
router.use('/category', categoryRouter);
router.use('/city', cityRouter);
router.use('/favorites', favoritesRouter);
router.use('/inbox', inboxRouter);
router.use('/location', locationRouter);
router.use('/message', messageRouter);
router.use('/rating', ratingRouter);
router.use('/recently_viewed', recentlyViewedRouter);
router.use('/search_all', searchAllRouter);
router.use('/search_category', searchCategoryRouter);
router.use('/search_history', searchHistoryRouter);
router.use('/top_location', topLocationRouter);
router.use('/voucher', voucherRouter);

export default router;
