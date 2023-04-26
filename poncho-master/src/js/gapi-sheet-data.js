/**
 * Helpers para manejar los json provenientes de Google Sheets.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 */
class GapiSheetData {
    constructor(options){
        const defaults = {
            "gapi_key": "AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY",
            "gapi_uri": "https://sheets.googleapis.com/v4/spreadsheets/"
        };
        let opts = Object.assign({}, defaults, options);
        this.gapi_key = opts.gapi_key;
        this.gapi_uri = opts.gapi_uri;
    }

    /**
     * URI para obtener el json de google sheet.
     * 
     * @param {string} page Nombre de la página a obtener.
     * @param {string} spreadsheet Id del documento Google Sheet.
     * @param {string} api_key Google API Key.
     * @returns {string} URL
     */
    url = (page, spreadsheet, api_key) => {
        const key = (typeof api_key !== "undefined" ? api_key : this.gapi_key);
        return [
            "https://sheets.googleapis.com/v4/spreadsheets/",
            spreadsheet, "/values/", page, "?key=", key, "&alt=json"
        ].join("");
    };

    /**
     * Retorna los elemento del json
     */
    json_data = (json) => {
        const feed = this.feed(json);
        return {
            "feed": feed,
            "entries": this.entries(feed),
            "headers": this.headers(feed)
        };
    };

    /**
     * Retorna con una estructura más cómoda para usar
     * @param {object} response Feed Json 
     * @returns {object}
     */
    feed = (response, lowercase = true) => {
        const keys = response.values[0];
        const regex = / |\/|_/ig;
        let entry = [];

        response.values.forEach((v, k) => {
            if(k > 0){

            let zip = {};
            for(var i in keys){
                var d = (v.hasOwnProperty(i))? v[i].trim() : "";
                if(lowercase){
                    zip[`${ keys[i].toLowerCase().replace(regex, "") }`] = d;
                } else {
                    zip[`${ keys[i].replace(regex, "") }`] = d;
                }
            }
            entry.push(zip);
            }
        });
        return entry;
    };

    /**
     * Variables.
     */
    gapi_feed_row = (data, separator="-", filter_prefix=true) => {
        const prefix = filter_prefix ? "filtro-" : "";
        const feed_keys = Object.entries(data);
        const clean = k => k.replace("gsx$", "")
                            .replace(prefix, "").replace(/-/g, separator);
        let list = {};
        feed_keys.map(v => list[clean(v[0])] = v[1]["$t"]);
        return list;
    };

    /**
     * Retrona las entradas excluyendo el primer row, ya que 
     * pertenece a los headers.
     * 
     * @param {object} feed 
     * @returns {object}
     */
    entries = (feed) => {
        return  feed.filter((v,k) => k > 0);
    };

    /**
     * Obtiene el primer row que es igual a los headers.
     * @param {*} feed 
     * @returns 
     */
    headers = (feed) => {
        return feed.find((v,k) => k == 0);
    };
};



// $START_TEST$
// ¡Atención! Patch para testear non-module
module.exports = GapiSheetData;
// $END_TEST$