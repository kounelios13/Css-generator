function DomStorage() {
	var cache = {};
	function getFromCache(selector){
		if(!cache[selector]){
			cache[selector] = $(selector);
		}
		return cache[selector];
	}
	function updateInCache(selector){
		if(!cache[selector]){
			throw new TypeError("The selector you want to update does not exist in cache");
		}
		else{
			cache[selector] = $(selector);
		}
	}
	function getCache(){
		return cache;
	}
	function flushCache(){
		cache = {};
	}
	return {
		get:getFromCache,
		update:updateInCache,
		getCache:getCache,
		flush:flushCache
	};
}
