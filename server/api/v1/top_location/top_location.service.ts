import { ITopLocation } from "../../../../types/top_location";
import { TopLocation } from "../../../models";

export class TopLocationService {

	constructor() { }

	async get(): Promise<Array<ITopLocation>> {
		return TopLocation.find({});
	}
	async create(payload: ITopLocation): Promise<ITopLocation> {
		const instance = new TopLocation(payload);
		return instance.save();
	}
	async getById(id): Promise<ITopLocation> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const [get] = await TopLocation.find({ _id: id });
				return resolve(get);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async update(id, user): Promise<ITopLocation> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				if (!user) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const updateQuery = await TopLocation.findOneAndUpdate({ _id: id }, user);
				return resolve(updateQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
	async delete(id): Promise<ITopLocation> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!id) {
					return reject({ message: "Invalid Payload", code: 400 })
				}
				const deleteQuery = await TopLocation.findOneAndDelete({ _id: id });
				return resolve(deleteQuery);
			} catch (err) {
				return reject(err);
			}
		})
	}
}

export default new TopLocationService();
