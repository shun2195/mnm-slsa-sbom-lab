"use strict";

const express = require("express");
const app = express();

app.get("/health", (_req, res) => {
  res.json({ status: "ok", project: "mnm-slsa-sbom-lab" });
});

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  app.listen(port, () => console.log("Running on port " + port));
}

module.exports = app;
