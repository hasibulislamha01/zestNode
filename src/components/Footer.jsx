import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <section>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className='text-end w-full mb-3 text-gray-600 font-medium pr-3'>Subscribe to our newsletter</h6>
                    <fieldset className="w-80">
                        <div className='flex gap-5'>
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item rounded-full" />
                            <button className="btn btn-primary join-item rounded-full">Subscribe</button>
                        </div>
                    </fieldset>
                    <div className='flex items-center justify-end gap-5 mt-2 mr-2 ml-auto'>
                        <BsInstagram size={20} />
                        <FaFacebook size={20} />
                        <BsTwitterX size={20} />
                        <FaPinterest size={20} />
                    </div>

                </form>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </section>
    );
};

export default Footer;