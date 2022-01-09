import React from "react";

function Footer() {
    return <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                2022 Murat Yüksel
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="https://github.com/muratyukselnet" target="_blank" className="text-gray-500" title="Github">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         className="w-5 h-5" viewBox="0 0 24 24">
                        <path xmlns="http://www.w3.org/2000/svg"
                              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                </a>
                <a href="https://twitter.com/muratyukselnet" target="_blank" className="ml-3 text-gray-500"
                   title="Twitter">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         className="w-5 h-5" viewBox="0 0 24 24">
                        <path xmlns="http://www.w3.org/2000/svg"
                              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/fototropi/" target="_blank" className="ml-3 text-gray-500"
                   title="Instagram">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="2"
                         className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/muratyukselnet" target="_blank" className="ml-3 text-gray-500"
                   title="Linkedin">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         className="w-5 h-5" viewBox="0 0 24 24">
                        <path xmlns="http://www.w3.org/2000/svg"
                              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
                <a href="https://t.me/muratyukselnet" target="_blank" className="ml-3 text-gray-500"
                   title="Telegram">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         className="w-5 h-5" viewBox="0 0 24 24">
                        <path xmlns="http://www.w3.org/2000/svg"
                              d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                </a>
                <a href="https://docs.google.com/document/d/190iUcDvHUwNc2sGofbqZvvGMxeHtx5UZ0Ugts7yiwRw"
                   target="_blank" className="ml-3 text-gray-500" title="CV">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         className="w-5 h-5" viewBox="0 0 24 24">
                         <path xmlns="http://www.w3.org/2000/svg"
                               d="M 18.761719 0 L 5.195312 0 C 3.6875 0 2.464844 1.222656 2.464844 2.726562 L 2.464844 21.226562 C 2.464844 22.734375 3.6875 23.953125 5.195312 23.953125 L 18.761719 23.953125 C 20.265625 23.953125 21.488281 22.734375 21.488281 21.226562 L 21.488281 2.726562 C 21.488281 1.222656 20.265625 0 18.761719 0 Z M 5.023438 9.195312 C 5.023438 8.554688 5.542969 8.035156 6.179688 8.035156 L 6.585938 8.035156 C 6.152344 7.558594 5.886719 6.929688 5.886719 6.234375 C 5.886719 4.75 7.09375 3.542969 8.578125 3.542969 C 10.0625 3.542969 11.269531 4.75 11.269531 6.234375 C 11.269531 6.929688 11.003906 7.558594 10.570312 8.035156 L 10.957031 8.035156 C 11.597656 8.035156 12.113281 8.554688 12.113281 9.195312 L 12.113281 11.144531 C 12.113281 11.757812 11.636719 12.253906 11.035156 12.292969 L 6.101562 12.292969 C 5.5 12.253906 5.023438 11.757812 5.023438 11.144531 Z M 17.839844 20.410156 L 6.113281 20.410156 C 5.511719 20.410156 5.023438 19.921875 5.023438 19.316406 C 5.023438 18.714844 5.511719 18.226562 6.113281 18.226562 L 17.839844 18.226562 C 18.441406 18.226562 18.929688 18.714844 18.929688 19.316406 C 18.929688 19.921875 18.441406 20.410156 17.839844 20.410156 Z M 17.839844 16.316406 L 6.113281 16.316406 C 5.511719 16.316406 5.023438 15.828125 5.023438 15.226562 C 5.023438 14.625 5.511719 14.136719 6.113281 14.136719 L 17.839844 14.136719 C 18.441406 14.136719 18.929688 14.625 18.929688 15.226562 C 18.929688 15.828125 18.441406 16.316406 17.839844 16.316406 Z M 17.839844 12.226562 L 14.296875 12.226562 C 13.691406 12.226562 13.203125 11.738281 13.203125 11.136719 C 13.203125 10.535156 13.691406 10.046875 14.296875 10.046875 L 17.839844 10.046875 C 18.441406 10.046875 18.929688 10.535156 18.929688 11.136719 C 18.929688 11.738281 18.441406 12.226562 17.839844 12.226562 Z M 17.839844 12.226562 "/>
                    </svg>
                </a>
                <a href="https://www.strava.com/athletes/muratyuksel"
                   target="_blank" className="ml-3 text-gray-500" title="Strava">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         className="w-5 h-5" viewBox="0 0 24 24">
                        <g xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 15.386719 17.945312 L 13.296875 13.828125 L 10.230469 13.828125 L 15.386719 24 L 20.539062 13.828125 L 17.46875 13.828125 "/>
                            <path
                                d="M 10.460938 8.230469 L 13.296875 13.828125 L 17.46875 13.828125 L 10.460938 0 L 3.460938 13.828125 L 7.632812 13.828125 "/>
                        </g>
                    </svg>
                </a>
            </span>
        </div>
    </footer>
}

export default Footer