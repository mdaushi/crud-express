module.exports = {
    jsonSuccess(pesan = '', data = {}){
        return {
            diagnostics: {
                status: true,
                message: pesan
            },
            items: data
        }
    },

    jsonError(pesan = ''){
        return {
            diagnostics: {
                status: false,
                message: pesan
            }
        }
    }
}