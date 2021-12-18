const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/async-handler");
const { User, Ticket, Seat } = require("../models/index");

//결제완료 페이지

router.get(
    "/:shortId/paymentsInfo",
    asyncHandler(async(req, res, next) => {
        const { shortId } = req.params;
        const user = await User.findOne({ shortId })
            .populate("userTicket")
            .populate("userSeat");
        if (!user) {
            throw new Error("존재하지 않는 유저입니다.");
        }

        const { category, price, duration } = user.userTicket;
        const { startTime } = user.userSeat;
        res.json({ category, price, duration, startTime });
        res.status(200).json({ message: "success" });
    })
);

module.exports = router;