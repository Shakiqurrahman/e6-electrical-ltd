import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <>
      <div className="p-6 w-full lg:w-1/2 shadow-card rounded-lg">
        <div className="relative m-0 block text-center">
          <Typography className="mt-4" variant="h3" color="blue-gray">
            Make a Booking
          </Typography>
          <Typography className="my-2 font-normal text-gray-600">
            To make a booking with us, please fill out our short form below and
            describe the problem you are having.
          </Typography>
        </div>
        <div className="space-y-4 pb-0">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Input color="blue" size="lg" name="name" label="Name" required />
            </div>
            <div className="w-full">
              <Input
                color="blue"
                size="lg"
                name="phone-number"
                label="Phone"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Input
                color="blue"
                size="lg"
                name="email"
                label="Email"
                required
              />
            </div>
            <div className="w-full">
              <Input
                color="blue"
                size="lg"
                name="post-code"
                label="Post Code"
                required
              />
            </div>
          </div>
          <Select
            className="text-[12px] leading-tight text-pretty"
            color="blue"
            label="Select Version"
            required
          >
            <Option>
              Complete Electrical Installation With 10 Year Warranty
            </Option>
            <Option>Consumer Unit / Fuse Box Replacement / Upgrade </Option>
            <Option>
              Smoke Alarm Certificate for Domestic or Commercial Properties{" "}
            </Option>
            <Option>PAT Testing Certificate </Option>
            <Option>
              Emergency Lighting Certificate for Domestic Commercial or
              Industrial Premises
            </Option>
            <Option>
              Electrical Safety Certificate for Domestic Commercial or
              Industrial Properties
            </Option>
          </Select>
          <div>
            <Textarea
              color="blue"
              label="Details about the issue you're having"
            />
          </div>
          <Typography className="text-center text-sm">
            By using this contact form you agree to the Heat Flow Ltd Terms &
            Conditions, and use of your details in accordance with our Privacy
            Policy
          </Typography>
        </div>
        <div className="mt-4">
          <Button className="mx-auto w-full py-4 bg-blue-600 text-sm">
            Send Booking Request
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
