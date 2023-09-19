import type {Resolver} from 'enhanced-resolve';

mode, excludes, includeFileSuffix, debug = false 

declare interface WebpackResolverModePluginOptions {
	/**
	 * The packaging mode of the current program.
     * 
     * default: '',
	 */
	mode: string;

	/**
     * Directories to be excluded during plug-in operation, supporting strings or arrays
     * default: /node_modules/,
     * 
     * demo:
     * 
     *      excludes: /node_modulse/,
     * 
     *      excludes: [/node_modules/, 'exclude-dir'],
	 */
	excludes: string | Array<string>;

	/**
	 * Which file types are matched by the plug-in
     * 
     * default: ['.js']
	 */
	includeFileSuffix: string[];

	/**
	 * Whether to output the work log
     * 
     * default: false
	 */
	debug: boolean;
}

declare class WebpackResolverModePlugin {
    constructor(options:WebpackResolverModePluginOptions);
    options:WebpackResolverModePluginOptions;
    apply(resolver:Resolver): void;
}