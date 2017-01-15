export const fetchAllReadStatuses = () => {
  return $.ajax({
    method: 'GET',
    url: `api/read_statuses`
  });
};
