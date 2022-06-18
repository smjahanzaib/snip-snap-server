import { ISearchHistory } from "../../../../types/search_history";
import { SearchHistory } from "../../../models";

export class SearchHistoryService {

	constructor() { }

	async get(): Promise<Array<ISearchHistory>> {
		return SearchHistory.find({});
	}
	async create(payload: ISearchHistory): Promise<ISearchHistory> {
		const instance = new SearchHistory(payload);
		return instance.save();
	}
	async getById(id): Promise<ISearchHistory> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const [get] = await SearchHistory.find({ _id: id });
				return resolve(get);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async update(id, user): Promise<ISearchHistory> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				if (!user) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const updateQuery = await SearchHistory.findOneAndUpdate({ _id: id }, user);
				return resolve(updateQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async delete(id): Promise<ISearchHistory> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const deleteQuery = await SearchHistory.findOneAndDelete({ _id: id });
				return resolve(deleteQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
}

export default new SearchHistoryService();
