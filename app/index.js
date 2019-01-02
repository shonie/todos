const express = require("express");
const configureApp = require("app/configureApp");

module.exports = ({ config }) => configureApp(express(), config);
