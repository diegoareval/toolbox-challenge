import connection from 'config/Axios';


export const GetListFiles = async () => {
  try {
    return connection.get('/files/data').then((res) => res);
  } catch (error) {

    console.error(error.message)
  }

};
