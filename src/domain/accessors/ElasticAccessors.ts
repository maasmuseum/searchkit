import * as _ from "lodash"

export default class ElasticAccessors {


	static facetFilter(key, data, ...filters){				
		if(!filters){
			return data
		}
		data = _.defaults(data, {
			query:{bool:{filter:[]}}
		})
		_.each(filters, (f)=> {
			data.query.bool.filter.push({
				term:{[key]:f}
			})
		})
		return data
	}

}
