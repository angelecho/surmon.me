/*
*
* 评论数据状态
*
*/

export const state = {
  fetching: false,
  posting: false,
  data: { 
    data: [],
    pagination: {}
  }
}

export const mutations = {
  // 获取评论
  REQUEST_LIST(state) {
    state.fetching = true
  },
  // 清空评论
  CLEAR_LIST(state) {
    state.data = { 
      data: [],
      pagination: {}
    }
  },
  GET_LIST_SUCCESS(state, action) {
    state.fetching = false
    state.data = action.result
  },
  GET_LIST_FAILURE(state) {
    state.fetching = false
    state.data = { 
      data: [],
      pagination: {}
    }
  },

  // 发布评论
  POST_ITEM(state) {
    state.posting = true
  },
  POST_ITEM_SUCCESS(state, action) {
    state.fetching = false
    state.data.pagination.total += 1
    state.data.data.push(action.result)
  },
  POST_ITEM_FAILURE(state) {
    state.fetching = false
  }
}
