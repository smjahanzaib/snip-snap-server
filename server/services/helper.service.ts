import { IMeUser } from '../../types/me';
import { IUser } from '../../types/user';

export class HelperService {

    tranformMeData(user: IUser) {
        return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user?.phone,
            address: user?.address,
            city: user?.city,
            country: user?.country,
            postalCode: user?.postalCode,
            profilePicture: user?.profilePicture
        } as IMeUser;
    }

}

export default new HelperService();