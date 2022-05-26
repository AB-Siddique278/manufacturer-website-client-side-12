import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='mt-10'>
                <footer class="footer p-10 bg-neutral text-neutral-content">
                    <div>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Motor Parts</a>
                        <a class="link link-hover">Car parts</a>
                        <a class="link link-hover">Ship parts</a>
                        <a class="link link-hover">Different parts</a>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">Portfolio</a>
                        <a class="link link-hover">Blog</a>
                        <a class="link link-hover">Product</a>
                        <a class="link link-hover">Dashboard</a>
                    </div>
                    <div>
                        <span class="footer-title">Social medial</span>
                        <a class="link link-hover">Facebook </a>
                        <a class="link link-hover">Twitter</a>
                        <a class="link link-hover">Instagram</a>
                    </div>

                    
                </footer>

            </div>
        </div>
    );
};

export default Footer;