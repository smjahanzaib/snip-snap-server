import { IRecentlyViewed } from "../../../../types/recently_viewed";
import { RecentlyViewed } from "../../../models";

export class RecentlyViewedService {

	constructor() { }

	async get(): Promise<Array<IRecentlyViewed>> {
		return RecentlyViewed.find({});
	}
	async create(payload: IRecentlyViewed): Promise<IRecentlyViewed> {
		const instance = new RecentlyViewed(payload);
		return instance.save();
	}
	async getById(id): Promise<IRecentlyViewed> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const [get] = await RecentlyViewed.find({ _id: id });
				return resolve(get);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async update(id, user): Promise<IRecentlyViewed> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				if (!user) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const updateQuery = await RecentlyViewed.findOneAndUpdate({ _id: id }, user);
				return resolve(updateQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async delete(id): Promise<IRecentlyViewed> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const deleteQuery = await RecentlyViewed.findOneAndDelete({ _id: id });
				return resolve(deleteQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
}

export default new RecentlyViewedService();
