type StrOrNum = string | number;
type ObjWithName = {name: string, uid: StrOrNum}

const logDetails = (uid: StrOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: ObjWithName) => {
  console.log(`${user.name} says hello`);
}