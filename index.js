exports.helloWorld = (req, res) => {
  const message = "<font color='blue'>Cloud Function</font><br><b>App Version 1.0</b>";
  res.status(200).send(message);
};
