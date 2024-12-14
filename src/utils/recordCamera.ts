export class ImageCapturer {
  private stream: MediaStream | null = null;

  /**
   * Request camera permissions and initialize the video stream if not already done.
   */
  public async requestPermission(): Promise<void> {
    if (!navigator.mediaDevices) {
      throw new Error("Your browser does not support media device access.");
    }

    if (this.stream) return;

    this.stream = await navigator.mediaDevices
      .getUserMedia({ video: true })
      .catch((error) => {
        throw new Error(
          "Unable to access camera. Permission denied or an error occurred: " +
            (error as Error).message
        );
      });
  }

  /**
   * Start the camera preview by creating a video element and returning it.
   * @returns The MediaStream displaying the preview.
   */
  public getPreview(): MediaStream {
    if (!this.stream) {
      throw new Error(
        "Stream not initialized. Call requestPermission() first."
      );
    }

    return this.stream;
  }

  /**
   * Stop the video stream and clean up resources.
   */
  public stop(): void {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
  }

  /**
   * Capture an image from the video stream.
   * @param videoElement The video element displaying the stream.
   * @returns A base64 string representing the captured image.
   */
  public captureImage(videoElement: HTMLVideoElement): string {
    if (!this.stream) {
      throw new Error(
        "Stream not initialized. Call requestPermission() first."
      );
    }

    // Create a canvas element to capture the image
    const canvas = document.createElement("canvas");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    // Draw the current video frame onto the canvas
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Unable to get canvas context.");
    }
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to a base64 image string
    return canvas.toDataURL("image/png");
  }
}
