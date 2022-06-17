import { ISearchCategory } from "../../../../types/search_category";
import { SearchCategory } from "../../../models";

export class SearchCategoryService {

	constructor() { }

	async get(): Promise<Array<ISearchCategory>> {
		return SearchCategory.find({});
	}
	async create(payload: ISearchCategory): Promise<ISearchCategory> {
		const instance = new SearchCategory(payload);
		return instance.save();
	}
	async getById(id): Promise<ISearchCategory> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const [get] = await SearchCategory.find({ _id: id });
				return resolve(get);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async update(id, user): Promise<ISearchCategory> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				if (!user) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const updateQuery = await SearchCategory.findOneAndUpdate({ _id: id }, user);
				return resolve(updateQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async delete(id): Promise<ISearchCategory> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const deleteQuery = await SearchCategory.findOneAndDelete({ _id: id });
				return resolve(deleteQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
}

export default new SearchCategoryService();
