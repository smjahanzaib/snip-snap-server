import { ISearchAll } from "../../../../types/search_all";
import { SearchAll } from "../../../models";

export class SearchAllService {

	constructor() { }

	async get(): Promise<Array<ISearchAll>> {
		return SearchAll.find({});
	}
	async create(payload: ISearchAll): Promise<ISearchAll> {
		const instance = new SearchAll(payload);
		return instance.save();
	}
	async getById(id): Promise<ISearchAll> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const [get] = await SearchAll.find({ _id: id });
				return resolve(get);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async update(id, user): Promise<ISearchAll> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				if (!user) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const updateQuery = await SearchAll.findOneAndUpdate({ _id: id }, user);
				return resolve(updateQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async delete(id): Promise<ISearchAll> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const deleteQuery = await SearchAll.findOneAndDelete({ _id: id });
				return resolve(deleteQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
}

export default new SearchAllService();
