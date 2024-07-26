// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Free Unlimited File Converter</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
                  Transform your files in the blink of an eye!! Break free from file format limitations. Your files your way. Convert them effortlessly.
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
