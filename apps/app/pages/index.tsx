
export function Index() {
  return <div>{new Date().toJSON().replace(/\.\d+Z$/, '').replace(/T/, ' ')}</div>;
}

export default Index;
