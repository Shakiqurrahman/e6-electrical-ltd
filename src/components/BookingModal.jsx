import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    IconButton,
    Input,
    Option,
    Select,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import React from "react";
import { RxCross1 } from "react-icons/rx";

const BookingModal = ({ handleOpen }) => {
    return (
        <>
            <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
                <DialogHeader className="relative m-0 block text-center">
                    <Typography className="mt-4" variant="h3" color="blue-gray">
                    Make a Booking
                    </Typography>
                    <Typography className="mt-1 font-normal text-gray-600">
                    To make a booking with us, please fill out our short form below and describe the problem you are having.
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="text"
                        className="!absolute right-3.5 top-3.5"
                        onClick={handleOpen}
                    >
                        <RxCross1 className="h-4 w-4 stroke-2" />
                    </IconButton>
                </DialogHeader>
                <DialogBody className="space-y-4 pb-6">
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Name
                        </Typography>
                        <Input
                            color="gray"
                            size="lg"
                            placeholder="Enter your name"
                            name="name"
                            className="placeholder:opacity-100 focus:!border-t-gray-900"
                            containerProps={{
                                className: "!min-w-full",
                            }}
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Phone
                        </Typography>
                        <Input
                            color="gray"
                            size="lg"
                            placeholder="Enter you phone number"
                            name="name"
                            className="placeholder:opacity-100 focus:!border-t-gray-900"
                            containerProps={{
                                className: "!min-w-full",
                            }}
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Category
                        </Typography>
                        <Select
                            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                            placeholder="1"
                            labelProps={{
                                className: "hidden",
                            }}
                        >
                            <Option>Clothing</Option>
                            <Option>Fashion</Option>
                            <Option>Watches</Option>
                        </Select>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium"
                            >
                                Weight
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="eg. <8.8oz | 250g"
                                name="weight"
                                className="placeholder:opacity-100 focus:!border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium"
                            >
                                Size
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="eg. US 8"
                                name="size"
                                className="placeholder:opacity-100 focus:!border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Description (Optional)
                        </Typography>
                        <Textarea
                            rows={7}
                            placeholder="eg. This is a white shoes with a comfortable sole."
                            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button className="ml-auto" onClick={handleOpen}>
                        Add Product
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default BookingModal;
