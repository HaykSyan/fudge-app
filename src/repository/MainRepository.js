import Client from "./Clients/axiosClient";

export default (resource) => ({
  get(payload = {}) {
    return Client.get(`${resource}`, { params: { ...payload } });
  },
  show(id) {
    return Client.get(`${resource}/${id}`);
  },
  create(payload) {
    return Client.post(`${resource}`, payload);
  },
  update(id, payload) {
    return Client.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return Client.delete(`${resource}/${id}`);
  },
});