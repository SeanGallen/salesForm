export class CompanyDetailsModel
{
    guid: string;
	customerUid: string;
    
    company_name: string;
	first_name: string;
	last_name: string;

	email: string;
	address: string;


	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}