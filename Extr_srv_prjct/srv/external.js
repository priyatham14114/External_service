const cds = require("@sap/cds");
module.exports = cds.service.impl(async (srv) => {
    // Connecting  API_BUSINESS_PARTNER Service
    const bp = await cds.connect.to("API_BUSINESS_PARTNER");
    srv.on("READ", "A_BusinessPartner", async req => {
        return bp.run(req.query);
    })
})
