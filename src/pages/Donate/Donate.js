import React from 'react';

export const Donate = () => {
    return (
        <div className="flex flex-col max-w-5xl items-start space-y-4 p-6 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-bold">Donate</h2>
            <p className="text-gray-700">
                At DobroMore, we believe in the power of giving. By donating to meaningful causes, we can make a positive impact on the lives of those in need and create a better world for everyone.
            </p>
            <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">Bank Transfer</h3>
                <p className="text-gray-700">
                    Bank: Russisch Orthodoxe Kirchengemeinde Stuttgart
                </p>
                <p className="text-gray-700">
                    IBAN: DE62600501010002645779
                </p>
                <p className="text-gray-700">
                    BIC: SOLADEST
                </p>
                <p className="text-gray-700">
                    Purpose: Kinderhilfe
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Donate with PayPal</h3>
                <p className="text-gray-700">
                    You can also make a donation using PayPal. Click the button below to proceed:
                </p>
                <form action="https://www.paypal.com/donate" method="post" target="_blank">
                    <input type="hidden" name="hosted_button_id" value="YOUR_PAYPAL_BUTTON_ID" />
                    <input
                        type="image"
                        src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif"
                        border="0"
                        name="submit"
                        title="PayPal - The safer, easier way to pay online!"
                        alt="Donate with PayPal button"
                        className="mt-4"
                    />
                </form>
            </div>
        </div>
    );
};
