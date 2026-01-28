import * as UAParser from 'ua-parser-js';

export interface DeviceInfo {
    deviceName: string;
    browser: string;
    os: string;
    browserName: string;
    browserVersion: string;
    osName: string;
    osVersion: string;
    deviceType: string;
}

/**
 * Parses user agent string to extract device, browser, and OS information
 * @param userAgent - The user agent string from the request
 * @returns Parsed device information
 */
export function parseUserAgent(userAgent?: string): DeviceInfo {
    if (!userAgent) {
        return {
            deviceName: 'Unknown Device',
            browser: 'Unknown Browser',
            os: 'Unknown OS',
            browserName: 'Unknown',
            browserVersion: '',
            osName: 'Unknown',
            osVersion: '',
            deviceType: 'desktop'
        };
    }

    const parser = new (UAParser as any)(userAgent);
    const result = parser.getResult();

    const browserName = result.browser.name || 'Unknown Browser';
    const browserVersion = result.browser.version || '';
    const osName = result.os.name || 'Unknown OS';
    const osVersion = result.os.version || '';
    const deviceType = result.device.type || 'desktop';
    const deviceVendor = result.device.vendor || '';
    const deviceModel = result.device.model || '';

    // Construct readable browser string
    const browser = browserVersion
        ? `${browserName} ${browserVersion}`
        : browserName;

    // Construct readable OS string
    const os = osVersion
        ? `${osName} ${osVersion}`
        : osName;

    // Construct readable device name
    let deviceName: string;
    if (deviceType === 'mobile' || deviceType === 'tablet') {
        deviceName = deviceVendor && deviceModel
            ? `${deviceVendor} ${deviceModel}`
            : `${browserName} on ${deviceType}`;
    } else {
        deviceName = `${browserName} on ${osName}`;
    }

    return {
        deviceName,
        browser,
        os,
        browserName,
        browserVersion,
        osName,
        osVersion,
        deviceType
    };
}

/**
 * Gets a location string from IP address (placeholder - can be enhanced with GeoIP service)
 * @param ipAddress - The IP address
 * @returns Location string or undefined
 */
export function getLocationFromIP(ipAddress?: string): string | undefined {
    // Placeholder: In production, integrate with a GeoIP service like:
    // - MaxMind GeoIP2
    // - IP-API.com
    // - ipstack.com

    if (!ipAddress) return undefined;

    // For localhost/development
    if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress.includes('localhost')) {
        return 'Local Development';
    }

    // Return undefined for now - can be enhanced later with actual GeoIP lookup
    return undefined;
}
