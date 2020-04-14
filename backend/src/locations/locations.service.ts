import {HttpService, Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {map} from "rxjs/operators";

@Injectable()
export class LocationsService {
    constructor(private configService: ConfigService, private httpService: HttpService) {

    }

    private apiKey: string = this.configService.get<string>('API_KEY');
    private apiUrl = this.configService.get<string>('API_URL') + '/channels';

    private config = {
        headers: {Authorization: `Bearer ${this.apiKey}`}
    };

    getLocations() {
        return this.httpService.get(this.apiUrl, this.config)
            .pipe(
                map(response => response.data)
            );
    }


    getLocationById(locationId: number) {
        return this.httpService.get(this.apiUrl + `/${locationId}`)
            .pipe(
                map(response => response.data)
            );
    }
}
