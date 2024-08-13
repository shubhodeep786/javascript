/* using the Prototype Chain */
/* No problems its beautiful maybe a long-winded */
/**
 * Represents a new user object.
 * @type {Object}
 */
function createUser() {
  const newUser = Object.create(userFunctionStore);
  return newUser;
}

return createUser();
