// الأسئلة المضمنة في الكود
const questions = [
   /* {
        question: "What is the purpose of image filtering in image processing?",
        answers: ["To reduce file size", "To remove noise or detect edges", "To change color depth", "To encrypt images"],
        correct: 1
    },
    {
        question: "Which filter is typically used to reduce image noise and blur?",
        answers: ["High-pass filter", "Median filter", "Low-pass filter", "Fourier filter"],
        correct: 2
    },
    {
        question: "What is the function of a high-pass filter?",
        answers: ["Remove image", "Sharpen edges", "Smooth the image", "Change resolution"],
        correct: 1
    },
    {
        question: "Which type of filtering works directly on pixel values?",
        answers: ["Spatial filtering", "Frequency filtering", "Wavelet transform", "Histogram equalization"],
        correct: 0
    },
    {
        question: "Which technique adds black pixels around an image before filtering?",
        answers: ["Edge padding", "Zero padding", "Image stretching", "Fourier wrapping"],
        correct: 1
    },
    {
        question: "Averaging filter is a type of:",
        answers: ["High-pass filter", "Edge detection", "Low-pass filter", "Frequency filter"],
        correct: 2
    },
    {
        question: "Which spatial filter helps preserve edges while reducing noise?",
        answers: ["Max filter", "Min filter", "Median filter", "Zero padding"],
        correct: 2
    },
    {
        question: "Which filter emphasizes the differences in adjacent pixel values?",
        answers: ["Low-pass", "High-pass", "Gaussian", "Min"],
        correct: 1
    },
    {
        question: "Which type of filtering uses convolution operations?",
        answers: ["Spatial filtering", "Motion tracking", "Frequency filtering", "Histogram equalization"],
        correct: 0
    },
    {
        question: "What is the role of weighted averaging filters?",
        answers: ["To apply uniform blur", "To give equal weight to all pixels", "To prioritize central pixels", "To reduce image size"],
        correct: 2
    },
    {
        question: "What does a median filter do best?",
        answers: ["Increase brightness", "Remove salt-and-pepper noise", "Detect edges", "Apply sharpening"],
        correct: 1
    },
    {
        question: "What is the goal of smoothing filters?",
        answers: ["Detect edges", "Increase contrast", "Reduce noise and blur", "Highlight corners"],
        correct: 2
    },
    {
        question: "Which filter removes high-frequency components?",
        answers: ["Low-pass filter", "High-pass filter", "Band-pass filter", "Max filter"],
        correct: 0
    },
    {
        question: "Which filter removes low-frequency components?",
        answers: ["Low-pass filter", "High-pass filter", "Median filter", "Gaussian filter"],
        correct: 1
    },
    {
        question: "Which filter keeps only a moderate range of frequencies?",
        answers: ["Low-pass", "High-pass", "Band-pass", "Median"],
        correct: 2
    },
    {
        question: "What is the function of max filter?",
        answers: ["Keep the brightest pixel in the window", "Keep the darkest pixel in the window", "Average the window", "Remove noise"],
        correct: 0
    },
    {
        question: "What is the function of min filter?",
        answers: ["Keep the average value", "Sharpen the image", "Keep the darkest pixel in the window", "Equalize histogram"],
        correct: 2
    },
    {
        question: "Which filter is used to detect edges in specific directions?",
        answers: ["Laplacian", "Sobel filter", "Median filter", "Gaussian filter"],
        correct: 1
    },
    {
        question: "What does convolution mean in image processing?",
        answers: ["Copying the image", "Applying a mask to a pixel and its neighbors", "Cropping an image", "Drawing lines"],
        correct: 1
    },
    {
        question: "What is a typical application of sharpening filters?",
        answers: ["Blur background", "Enhance edges and fine details", "Reduce file size", "Convert to grayscale"],
        correct: 1
    },
    {
        question: "Which domain focuses on pixel intensity operations?",
        answers: ["Spatial domain", "Frequency domain", "Temporal domain", "Histogram domain"],
        correct: 0
    },
    {
        question: "Which domain focuses on frequency components?",
        answers: ["Spatial domain", "Frequency domain", "Color domain", "Pixel domain"],
        correct: 1
    },
    {
        question: "What type of filter is used in medical imaging and drone systems for detail detection?",
        answers: ["High-pass filter", "Low-pass filter", "Band-pass filter", "Median filter"],
        correct: 0
    },
    {
        question: "Which is a smoothing operation in frequency domain?",
        answers: ["High-pass filtering", "Low-pass filtering", "Edge detection", "Sobel filter"],
        correct: 1
    },
    {
        question: "What is a common application of band-pass filters?",
        answers: ["Edge enhancement and noise reduction", "Compression", "Histogram equalization", "Saturation adjustment"],
        correct: 0
    },
    {
        question: "What happens when you apply a low-pass filter on an image?",
        answers: ["Blurring and noise reduction", "Sharpening", "Grayscale conversion", "Brightness increase"],
        correct: 0
    },
    {
        question: "What is used to preserve image size during convolution?",
        answers: ["Clipping", "Zero padding", "Image stretching", "Fourier wrapping"],
        correct: 1
    },
    {
        question: "Which filter is direction-sensitive?",
        answers: ["Sobel", "Median", "Max", "Laplacian"],
        correct: 0
    },
    {
        question: "What does the term 'mask' refer to in filtering?",
        answers: ["A storage format", "A brightness control", "A matrix applied to pixels", "A noise type"],
        correct: 2
    },
    {
        question: "What type of filter is the opposite of a low-pass filter?",
        answers: ["Median", "High-pass", "Band-pass", "Max filter"],
        correct: 1
    },
    {
        question: "What is the output of applying a high-pass filter to an image?",
        answers: ["Blurred image", "Sharpened image", "Resized image", "Compressed image"],
        correct: 1
    },
    {
        question: "What is the main goal of spatial domain filtering?",
        answers: ["Compress image", "Enhance features using pixel values", "Add watermark", "Encrypt data"],
        correct: 1
    },
    {
        question: "What does frequency domain filtering modify?",
        answers: ["Pixel locations", "Color levels", "Frequency components of the image", "Transparency"],
        correct: 2
    },
    {
        question: "In frequency domain, which transform is commonly used?",
        answers: ["Median transform", "Fourier Transform", "RGB transform", "Histogram transform"],
        correct: 1
    },
    {
        question: "What does zero padding prevent during convolution?",
        answers: ["Image compression", "Loss of border information", "Color blending", "Noise introduction"],
        correct: 1
    },
    {
        question: "What type of filter is most suitable for removing impulse noise?",
        answers: ["Median", "Max", "Low-pass", "Gaussian"],
        correct: 0
    },
    {
        question: "What type of image filter is Sobel?",
        answers: ["Smoothing filter", "Edge detection filter", "Averaging filter", "Median filter"],
        correct: 1
    },
    {
        question: "What does the low-pass filter allow through?",
        answers: ["Low frequency components", "High frequency components", "Medium range only", "Salt noise only"],
        correct: 0
    },
    {
        question: "Which operation uses kernel masks in 3x3 or 5x5 size?",
        answers: ["Color grading", "Noise generation", "Spatial filtering", "Dithering"],
        correct: 2
    },
    {
        question: "What kind of noise appears as random black and white dots?",
        answers: ["Gaussian noise", "Speckle noise", "Salt-and-pepper noise", "Quantization noise"],
        correct: 2
    },
    {
        question: "Which filter is best for salt-and-pepper noise?",
        answers: ["Median filter", "Gaussian filter", "High pass filter", "Max filter"],
        correct: 0
    },
    {
        question: "What is the source of Gaussian noise?",
        answers: ["Transmission loss", "Photon reflection", "Sensor/electronic interference", "File corruption"],
        correct: 2
    },
    {
        question: "Which noise appears as grainy patterns in radar images?",
        answers: ["Salt noise", "Gaussian noise", "Speckle noise", "Quantization noise"],
        correct: 2
    },
    {
        question: "What is the solution for Poisson noise?",
        answers: ["Median filter", "Averaging multiple frames", "Frequency domain filter", "Histogram equalization"],
        correct: 1
    },
    {
        question: "What is the visual appearance of periodic noise?",
        answers: ["Random dots", "Waves or stripes", "Grainy patterns", "Black and white dots"],
        correct: 1
    },
    {
        question: "What is dithering used for?",
        answers: ["Sharpen images", "Encrypt content", "Simulate smooth gradients", "Add noise"],
        correct: 2
    },
    {
        question: "What causes quantization noise?",
        answers: ["Brightness increase", "Reducing bit depth", "Edge sharpening", "Changing hue"],
        correct: 1
    },
    {
        question: "Which type of noise is linked to ISO settings in cameras?",
        answers: ["Periodic", "Poisson", "Gaussian", "Quantization"],
        correct: 2
    },
    {
        question: "What causes salt noise?",
        answers: ["Low contrast", "Bright pixels added randomly", "Stripe patterns", "Histogram shift"],
        correct: 1
    },
    {
        question: "What does adaptive filtering handle best?",
        answers: ["Speckle noise", "Salt noise", "Banding", "Gradient loss"],
        correct: 0
    },
    {
        question: "What is the typical cause of pepper noise?",
        answers: ["Blurred objects", "Dark pixels added randomly", "Pattern distortion", "Loss of sharpness"],
        correct: 1
    },
    {
        question: "What domain is ideal for removing periodic noise?",
        answers: ["Spatial", "Frequency", "Histogram", "Pixel-based"],
        correct: 1
    },
    {
        question: "What type of filter removes both low and high frequencies?",
        answers: ["Gaussian", "Median", "Band-pass filter", "Laplacian"],
        correct: 2
    },
    {
        question: "What kind of filter keeps a specific frequency range?",
        answers: ["Max filter", "Band-pass filter", "Low-pass filter", "High-pass filter"],
        correct: 1
    },
    {
        question: "Why use median filter over averaging filter?",
        answers: ["Faster performance", "Smoother color", "Better at removing impulse noise", "Reduces resolution"],
        correct: 2
    },
    {
        question: "What kind of noise appears more in low-light conditions?",
        answers: ["Gaussian noise", "Banding noise", "Salt noise", "Quantization"],
        correct: 0
    },
    {
        question: "When transform works in the frequency domain?",
        answers: ["Pixel transformation", "Dithering", "Fourier Transform", "Padding"],
        correct: 2
    },
    {
        question: "When is the main purpose of image restoration?",
        answers: ["Resize images", "Remove degradations like blur/noise", "Crop edges", "Increase colors"],
        correct: 1
    },
    {
        question: "Which is NOT a noise type?",
        answers: ["Salt-and-pepper", "Poisson", "Periodic", "Blurring"],
        correct: 3
    },
    {
        question: "What is the primary goal of image compression?",
        answers: ["Increase file size", "Improve resolution", "Reduce data size", "Convert image to grayscale"],
        correct: 2
    },
    {
        question: "Which of the following is not a type of redundancy in image data?",
        answers: ["Coding redundancy", "Spatial redundancy", "Color redundancy", "Irrelevant information"],
        correct: 2
    },
    {
        question: "Spatial redundancy refers to:",
        answers: ["Frequency of colors in a video", "Similarities between neighboring pixels", "Pixel values over time", "Coding inefficiencies"],
        correct: 1
    },
    {
        question: "Which of the following is a lossless compression method?",
        answers: ["JPEG", "Run Length Encoding", "DCT with Quantization", "Pattern loss"],
        correct: 1
    },
    {
        question: "JPEG compression uses which of the following techniques?",
        answers: ["Run Length only", "DCT + Quantization + Huffman", "Simple substitution only", "Arithmetic coding only"],
        correct: 1
    },
    {
        question: "Run Length Encoding works best with:",
        answers: ["Highly detailed images", "Images with large areas of the same color", "Audio data", "High contrast images"],
        correct: 1
    },
    {
        question: "What is coding redundancy?",
        answers: ["Repeated frames in a video", "Using more bits than needed to represent data", "Irrelevant human vision details", "Color shifts"],
        correct: 1
    },
    {
        question: "Temporal redundancy is mostly associated with:",
        answers: ["Static images", "Video sequences", "Audio streams", "Compression ratios"],
        correct: 1
    },
    {
        question: "Which type of compression results in loss of information?",
        answers: ["Lossy", "Lossless", "Run Length Encoding", "Huffman Coding"],
        correct: 0
    },
    {
        question: "In JPEG, Huffman coding is used:",
        answers: ["Before quantization", "After quantization", "During sampling", "Before DCT"],
        correct: 1
    },
    {
        question: "The purpose of quantization in JPEG is to:",
        answers: ["Increase file size", "Reduce precision of DCT coefficients", "Add noise", "Enhance edges"],
        correct: 1
    },
    {
        question: "Irrelevant information refers to:",
        answers: ["Data ignored by the human visual system", "Critical image data", "Encrypted data", "Metadata"],
        correct: 0
    },
    {
        question: "Which is not a stage in JPEG compression?",
        answers: ["DCT", "Run-Length Suppression only", "Quantization", "Huffman Coding"],
        correct: 1
    },
    {
        question: "A key problem in Run-Length Encoding is:",
        answers: ["Inefficiency with diverse data", "Color shifts", "Audio distortion", "Poor resolution"],
        correct: 0
    },
    {
        question: "Which algorithm is typically used in lossless compression?",
        answers: ["Quantization", "Run Length Encoding", "DCT", "Color mapping"],
        correct: 1
    },
    {
        question: "Compression ratio is defined as:",
        answers: ["Original file size / 2", "Original size / Compressed size", "Bits per pixel", "Image width × height"],
        correct: 1
    },
    {
        question: "Which of the following is part of the compression system model?",
        answers: ["Image printer", "Encoder and decoder", "Display", "Monitor resolution"],
        correct: 1
    },
    {
        question: "Simple repetition suppression refers to:",
        answers: ["Adding symbols", "Removing repeated characters", "Inverting pixels", "Amplifying patterns"],
        correct: 1
    },
    {
        question: "Entropy is highest when:",
        answers: ["One symbol dominates", "All symbols are equally likely", "The image is black and white", "Pixels are sorted"],
        correct: 1
    },
    {
        question: "Which compression type is reversible?",
        answers: ["Lossy", "Lossless", "Quantization", "DCT"],
        correct: 1
    },
    {
        question: "What does DCT stand for?",
        answers: ["Digital Compression Technique", "Discrete Cosine Transform", "Data Coding Technology", "Dynamic Color Transfer"],
        correct: 1
    },
    {
        question: "Pattern substitution works by:",
        answers: ["Replacing frequency occurring patterns with shorter codes", "Adding noise", "Increasing resolution", "Changing color depth"],
        correct: 0
    },
    {
        question: "The average code length is related to:",
        answers: ["Run Length Encoding", "Huffman Coding", "Quantization", "DCT"],
        correct: 1
    },
    {
        question: "An inefficient Run Length Encoding of '12345' might result in:",
        answers: ["1121314151", "1×5", "11111111", "54321"],
        correct: 0
    },
    {
        question: "Human visual system is less sensitive to:",
        answers: ["High frequency changes", "Low frequency changes", "Color shifts", "Brightness variations"],
        correct: 0
    },
    {
        question: "Compression is essential in business for:",
        answers: ["Faster image sharing and saving space", "Increasing file size", "Reducing quality", "Adding noise"],
        correct: 0
    },
    {
        question: "DCT is most useful for:",
        answers: ["Converting spatial data into frequency domain", "Adding noise", "Increasing resolution", "Changing color depth"],
        correct: 0
    },
    {
        question: "Huffman coding uses:",
        answers: ["Fixed-length codes", "Variable-length codes", "Random codes", "No codes"],
        correct: 1
    },
    {
        question: "Which format uses both lossy and lossless techniques?",
        answers: ["JPEG", "PNG", "GIF", "BMP"],
        correct: 0
    },
    {
        question: "Lossy compression is acceptable when:",
        answers: ["No loss is allowed", "Minor quality loss is tolerable", "Exact reconstruction is required", "Medical imaging is used"],
        correct: 1
    },
    {
        question: "What is the process of converting sound-waves into numbers called?",
        answers: ["Amplifying", "Synthesizing", "Digitizing", "Modulating"],
        correct: 2
    },
    {
        question: "Which of the following is used by Windows as the default audio file format?",
        answers: ["WAV", "SND", "MP3", "WMA"],
        correct: 0
    },
    {
        question: "What determines how often samples are taken per second in digital audio?",
        answers: ["Quantization", "Sampling Rate", "Bit Depth", "Encoding"],
        correct: 1
    },
    {
        question: "Which unit is used to measure sampling rate?",
        answers: ["Hertz (Hz)", "Decibels (dB)", "Bytes", "Seconds"],
        correct: 0
    },
    {
        question: "What does 16-bit quantization mean?",
        answers: ["256 quantization levels", "1024 quantization levels", "512 quantization levels", "65536 quantization levels"],
        correct: 3
    },
    {
        question: "What is the purpose of companding in audio processing?",
        answers: ["Compress file size", "Increase sampling rate", "Reduce quantization noise", "Convert to binary"],
        correct: 2
    },
    {
        question: "What term is used for sound recorded on a single audio channel?",
        answers: ["Surround", "Stereo", "Mono", "Multi-track"],
        correct: 2
    },
    {
        question: "What is the standard sampling rate for audio CDs?",
        answers: ["22 kHz", "44 kHz", "11 kHz", "96 kHz"],
        correct: 1
    },
    {
        question: "Which of the following improves audio quality but increases file size?",
        answers: ["Lower sampling rate", "Mono audio", "Higher bit depth", "Smaller file format"],
        correct: 2
    },
    {
        question: "What is the final step in digitizing audio?",
        answers: ["Sampling", "Quantization", "Encoding", "Synthesizing"],
        correct: 2
    },
    {
        question: "Which factor does not directly affect audio file size?",
        answers: ["Sampling rate", "Bit depth", "Number of channels", "File name"],
        correct: 3
    },
    {
        question: "What does lossy compression do to audio data?",
        answers: ["Increases quality", "Removes some data permanently", "Duplicates the file", "Adds metadata"],
        correct: 1
    },
    {
        question: "Which of the following is not a lossless format?",
        answers: ["FLAC", "ALAC", "MP3", "WAV"],
        correct: 2
    },
    {
        question: "What is MIDI primarily used for?",
        answers: ["Recording voice", "Controlling musical instruments", "Editing video", "Storing raw audio"],
        correct: 1
    },
    {
        question: "Which statement best describes MIDI files?",
        answers: ["They store real sound", "They contain video and audio", "They store musical instructions, not sound", "They are compressed audio files"],
        correct: 2
    },
    {
        question: "Which disk is involved in editing digital audio?",
        answers: ["Streaming", "Trimming", "Broadcasting", "Mixing live"],
        correct: 1
    },
    {
        question: "What does equalization do in audio editing?",
        answers: ["Increases volume", "Adjusts frequency content", "Reverses sound", "Adds silence"],
        correct: 1
    },
    {
        question: "What does down sampling mean?",
        answers: ["Increasing file size", "Saving file as MIDI", "Reducing the sample rate", "Adding more channels"],
        correct: 2
    },
    {
        question: "What does reversing a sound file do?",
        answers: ["Plays the sound backward", "Increases pitch", "Removes noise", "Compresses the file"],
        correct: 0
    },
    {
        question: "What is time stretching used for?",
        answers: ["Compressing audio", "Changing bit depth", "Changing audio length without changing pitch", "Increasing frequency"],
        correct: 2
    },
    {
        question: "What does digital signal processing (DSP) allow in audio editing?",
        answers: ["Add effects like echo and reverb", "Convert to stereo", "Rename files", "Compress file format"],
        correct: 0
    },
    {
        question: "Which file format stores musical instructions rather than actual sound?",
        answers: ["WAV", "MIDI", "MP3", "FLAC"],
        correct: 1
    },
    {
        question: "What does format conversion allow in audio editing?",
        answers: ["Replaces text", "Changes file type to suit applications", "Reduces sound quality", "Adds transitions"],
        correct: 1
    },
    {
        question: "Which is not a common audio editing task?",
        answers: ["Trimming", "Splicing", "Volume adjustment", "Browsing the web"],
        correct: 3
    },
    {
        question: "Which of the following is a common feature of digital audio editing software?",
        answers: ["Weather prediction", "Resampling", "Image rendering", "Web scraping"],
        correct: 1
    },
    {
        question: "What is the main advantage of MIDI over digital audio?",
        answers: ["Smaller file size", "Better sound quality", "Contains video", "Doesn't need instruments"],
        correct: 0
    },
    {
        question: "What is compression mainly used for in audio and video?",
        answers: ["Increase file size", "Add watermark", "Reduce file size", "Change bit depth"],
        correct: 2
    },
    {
        question: "What technique is used to remove spatial redundancy in video?",
        answers: ["Discrete Cosine Transform (DCT)", "MIDI", "Reversing", "Equalization"],
        correct: 0
    },
    {
        question: "What technique is used to remove temporal redundancy in video?",
        answers: ["Zigzag scanning", "Motion compensation (MC)", "MIDI conversion", "Audio filtering"],
        correct: 1
    },
    {
        question: "What is used at the final stage of video compression to reduce repeated values?",
        answers: ["Amplifier", "MIDI", "Run-Length Encoding (RLE)", "Volume control"],
        correct: 2
    },
    {
        question: "Speech recognition is the process of machines understanding spoken language.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "What is the key to delivering an effective business presentation?",
        answers: ["Reading from slides", "Using only text", "Structuring content and knowing your audience", "Speaking quickly"],
        correct: 2
    },
    {
        question: "What tool provides a zoomable canvas for presentations?",
        answers: ["PowerPoint", "Prezi", "Word", "Excel"],
        correct: 1
    },
    {
        question: "What type of digital story focuses on sharing company history and mission?",
        answers: ["Brand story", "Customer story", "Employee story", "Blog post"],
        correct: 0
    },
    {
        question: "Which of the following tools is mainly used for creating interactive PDFs?",
        answers: ["Canva", "Adobe Acrobat", "PowerPoint", "Prezi"],
        correct: 1
    },
    {
        question: "What is one benefit of using multimedia in reports?",
        answers: ["Makes them longer", "Reduces information", "Makes them more engaging and easier to understand", "Converts them to video"],
        correct: 2
    },
    {
        question: "Which presentation tool is best for business meetings and training sessions?",
        answers: ["Microsoft PowerPoint", "Canva", "TikTok", "Blender"],
        correct: 0
    },
    {
        question: "Which platform is often used for short, creative digital storytelling videos?",
        answers: ["Word", "Excel", "Instagram", "Acrobat"],
        correct: 2
    },
    {
        question: "What type of multimedia can help explain complex financial data?",
        answers: ["Animation", "Infographic", "Voiceover", "Background music"],
        correct: 1
    },
    {
        question: "What does a professional website help build?",
        answers: ["Cost", "Risk", "Credibility and trust", "Speed"],
        correct: 2
    },
    {
        question: "What is SEO mainly used for?",
        answers: ["Designing websites", "Improving search engine ranking", "Sending emails", "Editing photos"],
        correct: 1
    },
    {
        question: "Image filtering can help reduce noise in an image.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "A median filter is best suited for removing Gaussian noise.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "High-pass filters are used to sharpen images by enhancing edges.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Zero padding adds black pixels around the image to preserve size during filtering.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Histogram equalization decreases the contrast of an image.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "Spatial filtering operates on the frequency components of the image.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "A low-pass filter removes high-frequency components such as noise and edges.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "The Sobel filter is used for edge detection in specific directions.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Gaussian noise appears as random black and white dots.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "Convolution in image processing refers to multiplying two images.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "The Laplacian filter uses second derivatives to detect edges.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Weighted averaging filters give more importance to central pixels.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Median filters are linear filters.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "High-pass filters remove low-frequency components.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "The output size of an image after convolution is always smaller unless padding is used.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "A max filter keeps the darkest pixel value in the filter window.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "A min filter keeps the darkest pixel value in the filter window.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Band-pass filters keep only medium-frequency components.",
        answers: ["True", "False"],
        correct: 0
    },
   {
    question: "Spatial filters do not affect image brightness.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Image enhancement always results in larger file size.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Sound is a digital wave that travels through space.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Sampling is the process of taking measurements of sound at regular intervals.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "A higher sampling rate generally leads to better sound quality.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Quantization converts sound into electrical signals.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "8-bit quantization gives more accuracy than 16-bit quantization.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Mono sound uses two separate channels.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Audio quality is affected by sample rate, bit depth, and number of channels.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Companding is used to reduce quantization error.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Encoding converts numbers into binary form.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Stereo sound has a single audio channel.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "A well-structured presentation should include an introduction, main body, and conclusion.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Prezi is a tool that allows you to create traditional linear slide shows only.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Digital storytelling is only used in education, not in business.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "A website available 24/7 increases accessibility for customers.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "SEO helps a website rank higher in search engine results.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Augmented Reality replaces the physical world with a digital one.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "A good business website can help generate sales leads.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Using visuals in a presentation can distract the audience.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "VR is used in business only for gaming applications.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Run Length Encoding is a lossy method.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "JPEG is a lossless format.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Entropy measures the information content in a source.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "The human eye can detect all changes in image data.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Quantization reduces image precision.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Pattern substitution removes all pixels.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Compression is not needed in business applications.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Coding redundancy occurs when symbols use longer codes than necessary.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "DCT is used in JPEG compression.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Spatial redundancy is based on repetition in neighboring pixels.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Simple repetition suppression enhances detail in images.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Compression helps save bandwidth.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Irrelevant information is fully required for reconstruction.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Huffman coding uses equal-length codes for all characters.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Video sequences contain temporal redundancy.",
    answers: ["True", "False"],
    correct: 0
}
,
    {
        question: "Video sequences contain temporal redundancy.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "MIDI files are usually larger than digital audio files.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "Lossless compression permanently removes audio data.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "Audio editing cannot change the volume of a track.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "MP3 is an example of a lossy audio format.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Trimming in editing means cutting out unwanted parts.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Downsampling increases the quality of audio.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "Digital Signal Processing (DSP) can add special effects.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Time stretching affects the pitch of the audio.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "Equalization makes audio louder.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "MIDI files are not audio recordings but digital instructions.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Reversing audio can create surreal effects.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "DCT is used for removing redundancy in audio files.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Motion compensation reduces temporal redundancy in video.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "RLE is used to compress repeated values like zeros.",
        answers: ["True", "False"],
        correct: 0
    },
    {
    question: "A well-structured presentation should include an introduction, main body, and conclusion.",
    answers: ["True", "False"],
    correct: 0
   },
  {
    question: "Prezi is a tool that allows you to create traditional linear slide shows only.",
    answers: ["True", "False"],
    correct: 1
  },
  {
    question: "Digital storytelling is only used in education, not in business.",
    answers: ["True", "False"],
    correct: 1
  },
  {
    question: "A website available 24/7 increases accessibility for customers.",
    answers: ["True", "False"],
    correct: 0
  },
  {
    question: "SEO helps a website rank higher in search engine results.",
    answers: ["True", "False"],
    correct: 0
  },
  {
    question: "Augmented Reality replaces the physical world with a digital one.",
    answers: ["True", "False"],
    correct: 1
  },*/
  {
    question: "A good business website can help generate sales leads.",
    answers: ["True", "False"],
    correct: 0
  },
  {
    question: "Using visuals in a presentation can distract the audience.",
    answers: ["True", "False"],
    correct: 1
  },
  {
    question: "VR is used in business only for gaming applications.",
    answers: ["True", "False"],
    correct: 1
  },
  {
    question: "Employee stories can help humanize a brand.",
    answers: ["True", "False"],
    correct: 0
  },
];

// كلمة المرور للحذف
const DELETE_PASSWORD = "00000";

// رابط ملف النتائج على GitHub (استبدل بمعلومات مشروعك)
const GITHUB_LEADERBOARD_URL = 'https://raw.githubusercontent.com/[username]/[repo]/main/leaderboard.json';

// حالة اللعبة
const gameState = {
    currentScreen: 'main-menu',
    score: 0,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    streak: 0,
    gameQuestions: [],
    leaderboard: [],
    playerName: localStorage.getItem('playerName') || 'لاعب',
    soundEnabled: true,
    selectedTheme: localStorage.getItem('theme') || 'default'
};

// عناصر الواجهة
const elements = {
    screens: {
        'main-menu': document.getElementById('main-menu'),
        'settings-screen': document.getElementById('settings-screen'),
        'quiz-screen': document.getElementById('quiz-screen'),
        'results-screen': document.getElementById('results-screen'),
        'leaderboard-screen': document.getElementById('leaderboard-screen')
    },
    buttons: {
        startGame: document.getElementById('start-game'),
        settings: document.getElementById('settings-btn'),
        leaderboard: document.getElementById('leaderboard-btn'),
        next: document.getElementById('next-btn'),
        quit: document.getElementById('quit-btn'),
        saveScore: document.getElementById('save-score-btn'),
        playAgain: document.getElementById('play-again-btn'),
        settingsBack: document.getElementById('settings-back-btn'),
        resultsBack: document.getElementById('results-back-btn'),
        leaderboardBack: document.getElementById('leaderboard-back-btn'),
        deleteScore: document.getElementById('delete-score-btn'),
        confirmDelete: document.getElementById('confirm-delete-btn'),
        cancelDelete: document.getElementById('cancel-delete-btn')
    },
    quizElements: {
        questionText: document.getElementById('question-text'),
        answersContainer: document.getElementById('answers-container'),
        resultMessage: document.getElementById('result-message'),
        score: document.getElementById('score'),
        questionCount: document.getElementById('question-count'),
        streak: document.getElementById('streak'),
        progressBar: document.getElementById('progress-bar')
    },
    resultsElements: {
        finalScore: document.getElementById('final-score'),
        correctAnswers: document.getElementById('correct-answers'),
        finalProgress: document.getElementById('final-progress'),
        performanceComment: document.getElementById('performance-comment')
    },
    leaderboardElements: {
        leaderboardList: document.getElementById('leaderboard-list'),
        deleteSection: document.getElementById('delete-section'),
        deletePassword: document.getElementById('delete-password')
    },
    audio: {
        correct: document.getElementById('correct-sound'),
        wrong: document.getElementById('wrong-sound'),
        background: document.getElementById('background-music')
    },
    soundToggle: document.getElementById('sound-toggle'),
    themeOptions: document.querySelectorAll('.theme-option')
};

// تهيئة اللعبة
async function initGame() {
    loadSettings();
    setupEventListeners();
    await loadLeaderboard();
    playBackgroundMusic();
    console.log('تم تهيئة اللعبة بنجاح');
}

// تحميل الإعدادات
function loadSettings() {
    if (localStorage.getItem('soundEnabled') !== null) {
        gameState.soundEnabled = localStorage.getItem('soundEnabled') === 'true';
    }
    updateSoundButton();

    if (localStorage.getItem('theme')) {
        changeTheme(localStorage.getItem('theme'));
    }
}

// تحميل لوحة الصدارة
async function loadLeaderboard() {
    try {
        // جلب النتائج من Firestore
        const firebaseLeaderboard = await getLeaderboardFromFirestore();
        gameState.leaderboard = firebaseLeaderboard;
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        // استخدام النتائج المحلية فقط في حالة الخطأ
        gameState.leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    }
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // التنقل بين الشاشات
    elements.buttons.startGame.addEventListener('click', startGame);
    elements.buttons.settings.addEventListener('click', () => showScreen('settings-screen'));
    elements.buttons.leaderboard.addEventListener('click', () => showScreen('leaderboard-screen'));
    elements.buttons.next.addEventListener('click', nextQuestion);
    
    // أزرار الرجوع والخروج
    elements.buttons.quit.addEventListener('click', () => showScreen('main-menu'));
    elements.buttons.settingsBack.addEventListener('click', () => showScreen('main-menu'));
    elements.buttons.resultsBack.addEventListener('click', () => showScreen('main-menu'));
    elements.buttons.leaderboardBack.addEventListener('click', () => showScreen('main-menu'));
    
    // أحداث أخرى
    elements.buttons.saveScore.addEventListener('click', saveScore);
    elements.buttons.playAgain.addEventListener('click', restartGame);
    
    // أحداث الحذف
    elements.buttons.deleteScore.addEventListener('click', showDeleteSection);
    elements.buttons.confirmDelete.addEventListener('click', confirmDeleteScore);
    elements.buttons.cancelDelete.addEventListener('click', hideDeleteSection);
    
    // تغيير المظهر
    elements.themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            changeTheme(theme);
        });
    });
    
    // التحكم في الصوت
    elements.soundToggle.addEventListener('click', toggleSound);
    
    console.log('تم إعداد مستمعي الأحداث بنجاح');
}

// عرض قسم الحذف
function showDeleteSection() {
    if (gameState.leaderboard.length === 0) {
        alert('لا توجد نتائج مسجلة للحذف');
        return;
    }
    elements.leaderboardElements.deleteSection.style.display = 'block';
}

// إخفاء قسم الحذف
function hideDeleteSection() {
    elements.leaderboardElements.deleteSection.style.display = 'none';
    elements.leaderboardElements.deletePassword.value = '';
}

// تأكيد حذف النتيجة
async function confirmDeleteScore() {
    const password = elements.leaderboardElements.deletePassword.value;
    if (password !== DELETE_PASSWORD) {
        alert('كلمة المرور غير صحيحة');
        return;
    }

    const playerName = prompt('أدخل اسم اللاعب الذي تريد حذف نتيجته:');
    if (playerName && playerName.trim() !== '') {
        const index = gameState.leaderboard.findIndex(item => 
            item.name.toLowerCase() === playerName.toLowerCase());
        
        if (index !== -1) {
            await deleteScore(index);
        } else {
            alert('لا توجد نتيجة مسجلة لهذا اللاعب');
        }
    }
    hideDeleteSection();
}

// حذف النتيجة من القائمة
async function deleteScore(index) {
    if (confirm(`هل أنت متأكد من حذف نتيجة ${gameState.leaderboard[index].name}؟`)) {
        gameState.leaderboard.splice(index, 1);
        localStorage.setItem('leaderboard', JSON.stringify(gameState.leaderboard));
        await updateLeaderboard();
        alert('تم حذف النتيجة بنجاح');
    }
}

// تغيير الشاشة المعروضة
function showScreen(screenId) {
    console.log('محاولة عرض الشاشة:', screenId);
    
    // إخفاء جميع الشاشات
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // إظهار الشاشة المطلوبة
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        gameState.currentScreen = screenId;
        console.log('تم عرض الشاشة بنجاح:', screenId);
        
        // إيقاف الموسيقى إذا عدنا للقائمة الرئيسية
        if (screenId === 'main-menu') {
            stopBackgroundMusic();
        }
        
        // تحديث قائمة المتصدرين عند عرضها
        if (screenId === 'leaderboard-screen') {
            updateLeaderboard();
        }
    } else {
        console.error('لم يتم العثور على الشاشة:', screenId);
    }
}

// بدء اللعبة
function startGame() {
    gameState.score = 0;
    gameState.currentQuestionIndex = 0;
    gameState.correctAnswers = 0;
    gameState.streak = 0;
    
    gameState.gameQuestions = [...questions];
    shuffleArray(gameState.gameQuestions);
    
    showScreen('quiz-screen');
    showQuestion();
}

// عرض السؤال الحالي
function showQuestion() {
    if (gameState.currentQuestionIndex >= gameState.gameQuestions.length) {
        endGame();
        return;
    }
    
    const question = gameState.gameQuestions[gameState.currentQuestionIndex];
    elements.quizElements.questionText.textContent = question.question;
    elements.quizElements.answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('div');
        answerBtn.className = 'answer-btn';
        answerBtn.textContent = answer;
        answerBtn.dataset.correct = index === question.correct;
        answerBtn.addEventListener('click', () => selectAnswer(answerBtn));
        elements.quizElements.answersContainer.appendChild(answerBtn);
    });
    
    elements.quizElements.questionCount.textContent = `${gameState.currentQuestionIndex + 1}/${gameState.gameQuestions.length}`;
    elements.quizElements.progressBar.style.width = `${(gameState.currentQuestionIndex / gameState.gameQuestions.length) * 100}%`;
    elements.quizElements.score.textContent = gameState.score;
    elements.quizElements.streak.textContent = gameState.streak;
    elements.quizElements.resultMessage.textContent = '';
    elements.buttons.next.disabled = true;
}

// اختيار إجابة
function selectAnswer(selectedBtn) {
    if (selectedBtn.classList.contains('selected')) return;
    selectedBtn.classList.add('selected');
    
    const isCorrect = selectedBtn.dataset.correct === 'true';
    const answerBtns = elements.quizElements.answersContainer.querySelectorAll('.answer-btn');
    
    answerBtns.forEach(btn => {
        btn.style.pointerEvents = 'none';
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        } else if (btn === selectedBtn && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    if (gameState.soundEnabled) {
        if (isCorrect) {
            elements.audio.correct.currentTime = 0;
            elements.audio.correct.play().catch(e => console.log("Error playing sound:", e));
        } else {
            elements.audio.wrong.currentTime = 0;
            elements.audio.wrong.play().catch(e => console.log("Error playing sound:", e));
        }
    }
    
    if (isCorrect) {
        gameState.correctAnswers++;
        gameState.streak++;
        const points = 10 * Math.min(gameState.streak, 5);
        gameState.score += points;
        elements.quizElements.resultMessage.textContent = `إجابة صحيحة! +${points} نقطة`;
        elements.quizElements.resultMessage.style.color = '#4CAF50';
    } else {
        gameState.streak = 0;
        elements.quizElements.resultMessage.textContent = 'إجابة خاطئة!';
        elements.quizElements.resultMessage.style.color = '#f44336';
    }
    
    elements.quizElements.score.textContent = gameState.score;
    elements.quizElements.streak.textContent = gameState.streak;
    elements.buttons.next.disabled = false;
}

// الانتقال إلى السؤال التالي
function nextQuestion() {
    gameState.currentQuestionIndex++;
    showQuestion();
}

// انتهاء اللعبة
function endGame() {
    showScreen('results-screen');
    
    elements.resultsElements.finalScore.textContent = gameState.score;
    elements.resultsElements.correctAnswers.textContent = `${gameState.correctAnswers}/${gameState.gameQuestions.length}`;
    
    const percentage = (gameState.correctAnswers / gameState.gameQuestions.length) * 100;
    elements.resultsElements.finalProgress.style.width = `${percentage}%`;
    
    let comment = '';
    if (percentage >= 90) comment = 'أداء رائع! أنت خبير في هذا المجال!';
    else if (percentage >= 70) comment = 'عمل جيد! لديك معرفة قوية.';
    else if (percentage >= 50) comment = 'ليس سيئاً! يمكنك التحسن بالممارسة.';
    else comment = 'حاول مرة أخرى! الممارسة تصنع الفرق.';
    
    elements.resultsElements.performanceComment.textContent = comment;
}

// إعادة اللعبة
function restartGame() {
    startGame();
}

// حفظ النتيجة
async function saveScore() {
    const playerName = prompt('أدخل اسمك لحفظ النتيجة:', gameState.playerName);
    
    if (playerName && playerName.trim() !== '') {
        gameState.playerName = playerName.trim();
        localStorage.setItem('playerName', gameState.playerName);
        
        const scoreEntry = {
            name: gameState.playerName,
            score: gameState.score,
            correct: gameState.correctAnswers,
            total: gameState.gameQuestions.length,
            date: new Date().toLocaleDateString()
        };
        
        // حفظ النتيجة محلياً
        const localLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        localLeaderboard.push(scoreEntry);
        localStorage.setItem('leaderboard', JSON.stringify(localLeaderboard));
        
        // محاولة حفظ النتيجة على Firestore
        try {
            await addScoreToFirestore(scoreEntry);
            console.log('Score saved to Firestore:', scoreEntry);
        } catch (error) {
            console.error('Error saving score to Firestore:', error);
        }
        
        alert('تم حفظ نتيجتك بنجاح!');
        await loadLeaderboard();
        showScreen('leaderboard-screen');
    }
}

// حذف النتيجة من Firestore
async function deleteScoreFromFirestore(docId) {
    const db = window.firestore;
    console.log('Trying to delete docId:', docId);
    await db.collection("leaderboard").doc(docId).delete();
}

// تحديث قائمة المتصدرين
async function updateLeaderboard() {
    elements.leaderboardElements.leaderboardList.innerHTML = '<p>جاري تحميل النتائج...</p>';
    try {
        await loadLeaderboard();
        if (gameState.leaderboard.length === 0) {
            elements.leaderboardElements.leaderboardList.innerHTML = '<p>لا توجد نتائج مسجلة بعد</p>';
            return;
        }
        elements.leaderboardElements.leaderboardList.innerHTML = '';
        gameState.leaderboard.forEach((entry, index) => {
            const scoreItem = document.createElement('div');
            scoreItem.className = 'leaderboard-item';
            if (entry.name === gameState.playerName) {
                scoreItem.style.fontWeight = 'bold';
                scoreItem.style.color = 'var(--primary-color)';
            }
            scoreItem.innerHTML = `
                <strong>${index + 1}. ${entry.name}</strong>
                <div>النقاط: ${entry.score} (${entry.correct}/${entry.total})</div>
                <small>${entry.date}</small>
                <button class="delete-btn" data-id="${entry.id}" data-index="${index}">×</button>
            `;
            elements.leaderboardElements.leaderboardList.appendChild(scoreItem);
        });
        // إضافة مستمعي الأحداث لأزرار الحذف
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async function(e) {
                e.stopPropagation();
                const password = prompt('أدخل كلمة المرور للحذف:');
                if (password === DELETE_PASSWORD) {
                    const docId = this.dataset.id;
                    if (docId) {
                        try {
                            await deleteScoreFromFirestore(docId);
                            await loadLeaderboard();
                            await updateLeaderboard();
                            alert('تم حذف النتيجة بنجاح');
                        } catch (err) {
                            alert('حدث خطأ أثناء الحذف: ' + err.message);
                            console.error(err);
                        }
                    } else {
                        alert('لا يمكن حذف هذه النتيجة (لا يوجد معرف)');
                    }
                } else {
                    alert('كلمة المرور غير صحيحة');
                }
            });
        });
    } catch (error) {
        console.error('Error updating leaderboard:', error);
        elements.leaderboardElements.leaderboardList.innerHTML = '<p>حدث خطأ في تحميل النتائج</p>';
    }
}

// تغيير المظهر
function changeTheme(theme) {
    gameState.selectedTheme = theme;
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'default' ? '' : `theme-${theme}`;
    
    elements.themeOptions.forEach(option => {
        option.classList.toggle('selected', option.dataset.theme === theme);
    });
}

// تبديل الصوت
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    localStorage.setItem('soundEnabled', gameState.soundEnabled);
    updateSoundButton();
    
    if (gameState.soundEnabled) {
        playBackgroundMusic();
    } else {
        stopBackgroundMusic();
    }
}

// تشغيل موسيقى الخلفية
function playBackgroundMusic() {
    if (gameState.soundEnabled) {
        elements.audio.background.volume = 0.3;
        elements.audio.background.play().catch(e => console.log('لا يمكن تشغيل الصوت:', e));
    }
}

// إيقاف موسيقى الخلفية
function stopBackgroundMusic() {
    elements.audio.background.pause();
}

// تحديث زر الصوت
function updateSoundButton() {
    if (gameState.soundEnabled) {
        elements.soundToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
        `;
    } else {
        elements.soundToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.74 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3.27 2 2 3.27 5.73 7H3v10h4l5 5V9.27L18.73 21 20 19.73 3.27 2z"/>
            </svg>
        `;
    }
}

// دالة خلط المصفوفة
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// تشغيل اللعبة عند الضغط على زر "ابدأ اللعب"
if (elements.buttons.startGame) {
    elements.buttons.startGame.addEventListener('click', () => {
        console.log("زر البدء تم النقر عليه، بدء اللعبة...");
        startGame();
    });
} else {
    console.error("لم يتم العثور على زر بدء اللعبة!");
}

// التأكد من تشغيل اللعبة عند تحميل الصفحة
window.addEventListener('load', () => {
    console.log("جارٍ تحميل اللعبة...");
    initGame();
});

// Firestore helpers for compat SDK
async function addScoreToFirestore(scoreEntry) {
    const db = window.firestore;
    await db.collection("leaderboard").add({
        ...scoreEntry,
        timestamp: new Date()
    });
}

async function getLeaderboardFromFirestore() {
    const db = window.firestore;
    const snapshot = await db.collection("leaderboard")
        .orderBy("score", "desc")
        .limit(10)
        .get();
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}
