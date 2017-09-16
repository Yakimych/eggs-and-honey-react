import config from '../config';
import DataProvider from './DataProvider';
import FakeDataProvider from './FakeDataProvider';

const dataProviderFactory = {
  getDataProvider : getDataProvider
};

function getDataProvider() {
  if (config.useFakeData) {
    return FakeDataProvider;
  }

  return DataProvider;
};

export default dataProviderFactory;