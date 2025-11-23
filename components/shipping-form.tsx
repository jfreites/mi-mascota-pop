'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createCustomer, CustomerData } from "@/app/actions/customer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShippingForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CustomerData>();
    const [customerId, setCustomerId] = useState<string | null>(null);

    const onSubmit = async (data: CustomerData) => {
        const result = await createCustomer(data);

        if (result.success) {
            toast.success("Customer created successfully!");
            setCustomerId(result.customer.id);
        } else {
            toast.error(`Error: ${result.error}`);
        }
    };

    if (customerId) {
        return (
            <Card className="w-full max-w-md mx-auto mt-8 bg-green-50 border-green-200">
                <CardContent className="pt-6 text-center">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Success!</h3>
                    <p className="text-green-700">Customer created with ID:</p>
                    <code className="bg-white px-2 py-1 rounded border border-green-200 block mt-2 font-mono text-sm">
                        {customerId}
                    </code>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-2xl mx-auto mt-8">
            <CardHeader>
                <CardTitle>Shipping Details</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="you@example.com"
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="full_name">Full Name</Label>
                            <Input
                                id="full_name"
                                {...register("full_name", { required: "Full name is required" })}
                                placeholder="John Doe"
                            />
                            {errors.full_name && <p className="text-sm text-red-500">{errors.full_name.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="address_line1">Address Line 1</Label>
                        <Input
                            id="address_line1"
                            {...register("address_line1", { required: "Address is required" })}
                            placeholder="123 Main St"
                        />
                        {errors.address_line1 && <p className="text-sm text-red-500">{errors.address_line1.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="address_line2">Address Line 2 (Optional)</Label>
                        <Input
                            id="address_line2"
                            {...register("address_line2")}
                            placeholder="Apt 4B"
                        />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2 col-span-2 md:col-span-1">
                            <Label htmlFor="city">City</Label>
                            <Input
                                id="city"
                                {...register("city", { required: "City is required" })}
                                placeholder="New York"
                            />
                            {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                        </div>
                        <div className="space-y-2 col-span-2 md:col-span-1">
                            <Label htmlFor="state">State</Label>
                            <Input
                                id="state"
                                {...register("state", { required: "State is required" })}
                                placeholder="NY"
                            />
                            {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
                        </div>
                        <div className="space-y-2 col-span-2 md:col-span-1">
                            <Label htmlFor="postal_code">Zip Code</Label>
                            <Input
                                id="postal_code"
                                {...register("postal_code", { required: "Zip code is required" })}
                                placeholder="10001"
                            />
                            {errors.postal_code && <p className="text-sm text-red-500">{errors.postal_code.message}</p>}
                        </div>
                        <div className="space-y-2 col-span-2 md:col-span-1">
                            <Label htmlFor="country">Country</Label>
                            <Input
                                id="country"
                                {...register("country", { required: "Country is required" })}
                                defaultValue="US"
                            />
                            {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : "Save Shipping Details"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
