export enum FruitOrderState {
    UnConfirm,
    SendProduct,
    //  订单确认后取消的原因
    Cancel,
    // 从购物车中移除
    Remove,

    // 已完结
    Finish


}