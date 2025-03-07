import { AllImages } from '@/assets/AllImages';
import { Tag } from 'antd';
import Image from 'next/image';
import React from 'react';

const NotificationModal = () => {
    return (
        <div>
            <h1 className='text-xl font-bold border-0 border-b pb-2 '>(0) Notifications</h1>
            <div className="flex items-center gap-3 border-0 border-b pb-2 mb-2">
                <Image
                    src={AllImages.user}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-neutral-600">You have a message from Alex Rivera, check it out.</h3>
                    <p className="text-gray-500 text-sm">3 days ago</p>
                </div>
            </div>
            <div className="flex items-center gap-3 border-0 border-b pb-2 mb-2">
                <Image
                    src={AllImages.user}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-neutral-600">You have a message from Alex Rivera.</h3>
                    <p className="text-gray-500 text-sm">3 days ago</p>
                </div>
            </div>
            <div className="flex items-center gap-3 border-0 border-b pb-2 mb-2">
                <Image
                    src={AllImages.user}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-neutral-600">You have a message from Alex Rivera.</h3>
                    <p className="text-gray-500 text-sm">3 days ago</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;